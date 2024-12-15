import { Fragment, useEffect, useState } from "react";
import TitleComponent from "../components/TitleComponent";
import { IFileInfo } from "../interfaces/IFileInfo";
import { invoke } from "@tauri-apps/api/core";
import { Edit2, Eye, Frown, Trash2, TriangleAlert } from "lucide-react";
import { ErrorComponent } from "../components/ErrorComponent";

export default function Keys() {

    const path = "C:/Users/vaere/.ssh"

    const [directoryContents, setDirectoryContents] = useState([] as IFileInfo[]);
    const [error, setError] = useState('');

    const fetchDirectoryContents = async (path: String) => {
        try {
          let contents : IFileInfo[] = await invoke('read_directory', { path });

          contents = contents.filter(k => !k.name.includes(".pub"))
          contents = contents.filter(k => !k.name.includes("known_hosts"))
          contents = contents.filter(k => !k.name.includes("config"))
          contents = contents.filter(k => !k.name.includes("authorized_keys"))    

          setDirectoryContents(contents);
          setError('');
        } catch (err) {
          console.error('Error fetching directory contents:', err);
          setError('Failed to read directory contents.');
        }
      };

      useEffect(() => {
        fetchDirectoryContents(path);
      }, [path]);  



    return (
        <>
            <TitleComponent title="Create a new key" description="Create a new key. Note! You will not be able to view your private key here (only your public key)." topMarginClass="mt-0"/> 
            <TitleComponent title="Keys" description="Here you're able to view and manage your ssh keys..."/> 
            {error && <ErrorComponent errorTitle="Failed to fetch keys." description={error} icon={<TriangleAlert size={80} className="text-gray-500"/>}/>}
            {directoryContents.length > 0 ? (
        <div className="text-gray-300 p-4 font-mono text-l">
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2">
          <div className="contents text-gray-400">
            <div>Hash</div>
            <div>Name</div>
            <div>Actions</div>
          </div>
          {directoryContents.map((key) => (
            <Fragment key={key.md5_hash?.toString()}>
              <div className="flex items-center side-bar">
                {key.md5_hash}
              </div>
              <div className="flex items-center side-bar">
                {key.name}
              </div>
              <div className="flex items-center space-x-2 side-bar">
                  <button className="text-gray-400 hover:text-white">
                    <Eye className="h-4 w-4" />
                  </button>

                  <button className="text-gray-400 hover:text-white">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <Trash2 className="h-4 w-4" />
                  </button>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      ) : (
        !error && <ErrorComponent errorTitle="No keys found!" description="You currently have no keys available. Please create a new key." icon={<Frown size={80} className="text-gray-500"/>}/>
      )}
        </>
    );
}