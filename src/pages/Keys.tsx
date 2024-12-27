import { Fragment, useEffect, useState } from "react";
import TitleComponent from "../components/TitleComponent";
import { IFileInfo } from "../interfaces/IFileInfo";
import { invoke } from "@tauri-apps/api/core";
import { CirclePlusIcon, Edit2, Eye, Frown, PlusIcon, Trash2, TriangleAlert } from "lucide-react";
import { ErrorComponent } from "../components/ErrorComponent";
import { Modal } from "../components/Modal";
import { CreateSSHKeyForm } from "../components/forms/CreateSSHKeyForm";

export default function Keys() {

    const path = "C:/Users/vaere/.ssh"

    const [directoryContents, setDirectoryContents] = useState([] as IFileInfo[]);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

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
            <TitleComponent title="Keys" description="Here you're able to view and manage your ssh keys...">
              <button onClick={() => setIsModalOpen(true)} className="min-w-fit text-gray-400 hover:text-white rounded-lg flex px-2 py-1 items-center"><PlusIcon size={15} className="mr-1"/> Add key</button>
            </TitleComponent> 
            {error && <ErrorComponent errorTitle="Failed to fetch keys." description={error} icon={<TriangleAlert size={80} className="text-gray-500"/>}/>}
            {directoryContents.length > 0 ? (
        <div className="text-gray-300 p-4 font-mono text-l">
        <div className="grid grid-cols-[auto_auto] gap-x-4 gap-y-2">
          <div className="contents text-gray-400">
            <div>Name</div>
            <div>Actions</div>
          </div>
          {directoryContents.map((key) => (
            <Fragment key={key.md5_hash?.toString()}>
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
      <Modal title="Create a new key" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateSSHKeyForm onSubmit={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}/>
      </Modal>
        </>
    );
}