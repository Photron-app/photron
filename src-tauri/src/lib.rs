use std::fs::{self, File};
use std::io::Read ;
use std::path::PathBuf;
use md5;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![read_directory])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


#[derive(serde::Serialize)]
struct FileInfo {
    name: String,
    is_file: bool,
    is_dir: bool,
    md5_hash: Option<String>
}

fn calculate_md5(path: &PathBuf) -> Result<String, String> {
    let mut file = File::open(path).map_err(|e| format!("Failed to open file: {}", e))?;
    let mut hasher = md5::Context::new();
    let mut buffer = [0; 8192];

    loop {
        let bytes_read = file.read(&mut buffer).map_err(|e| format!("Failed to read file: {}", e))?;
        if bytes_read == 0 {
            break;
        }
        hasher.consume(&buffer[..bytes_read]);
    }

    Ok(format!("{:x}", hasher.compute()))
}



#[tauri::command]
async fn read_directory(path: String) -> Result<Vec<FileInfo>, String> {
    let path = PathBuf::from(path);

    if !path.exists() {
        return Err(format!("Path does not exist: {}", path.display()));
    }

    let mut files = Vec::new();

    match fs::read_dir(&path) {
        Ok(entries) => {
            for entry in entries {
                match entry {
                    Ok(entry) => {
                        let file_name = entry.file_name().into_string().unwrap_or_default();
                        let metadata = entry.metadata();
                        if let Ok(metadata) = metadata {
                            let is_file = metadata.is_file();
                            let md5_hash = if is_file {
                                calculate_md5(&entry.path()).ok()
                            } else {
                                None
                            };
                            files.push(FileInfo {
                                name: file_name,
                                is_file,
                                is_dir: metadata.is_dir(),
                                md5_hash,
                            });
                        }
                    }
                    Err(err) => return Err(format!("Failed to read entry: {}", err)),
                }
            }
        }
        Err(err) => return Err(format!("Failed to read directory: {}", err)),
    }

    Ok(files)
}