/**
 * @description View all functionality related to generating and deleting SSH keys. 
 */

import { Banner } from "../components/ui/banner"
import Tooltip from "../components/ui/ToolTip";
import { ContentTitle } from "../components/ui/contentTitle"
import { useStreamMode } from "../components/providers/StreamModeProvider"
import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import { IFileInfo } from "../interfaces/IFileInfo";
import { ErrorCard } from "../components/ui/ErrorCard";
import { Edit2, Eye, Frown, Hash, Trash2, TriangleAlert } from "lucide-react";
import React from "react";

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


    const {streamMode} = useStreamMode();
    return (
    <div>
        {streamMode && <Banner text="Streaming mode is enabled." description="You're not able to view private keys in this mode."/>}
        <ContentTitle title="Create a new key" topMarginClass="mt-0" />
        <div className="flex w-72 flex-col">
        <div className="w-full max-w-sm min-w-[200px]">
            <input className="w-full bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Filename..." />
        </div>
        </div>
        <ContentTitle title="Keys" topMarginClass="mt-10"/>
        {error && <ErrorCard errorTitle="Failed to fetch keys." description={error} icon={<TriangleAlert size={80} className="text-gray-500"/>}/>}
        {directoryContents.length > 0 ? (
        <div className="text-gray-300 p-4 font-mono text-l">
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2">
          <div className="contents text-gray-400">
            <div>Hash</div>
            <div>Name</div>
            <div>Actions</div>
          </div>
          {directoryContents.map((key) => (
            <React.Fragment key={key.md5_hash?.toString()}>
              <div className="flex items-center side-bar">
                <Tooltip content={<span className="whitespace-nowrap">MD5: {key.md5_hash}</span>}>
                  <Hash className="h-4 w-4 text-gray-500 cursor-pointer" />
                </Tooltip>
              </div>
              <div className="flex items-center side-bar">
                {key.name}
              </div>
              <div className="flex items-center space-x-2 side-bar">
                <Tooltip content="View content">
                  <button className="text-gray-400 hover:text-white">
                    <Eye className="h-4 w-4" />
                  </button>
                </Tooltip>
                <Tooltip content="Edit name">
                  <button className="text-gray-400 hover:text-white">
                    <Edit2 className="h-4 w-4" />
                  </button>
                </Tooltip>
                <Tooltip content="Delete">
                  <button className="text-gray-400 hover:text-white">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </Tooltip>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      ) : (
        !error && <ErrorCard errorTitle="No keys found!" description="You currently have no keys available. Please create a new key." icon={<Frown size={80} className="text-gray-500"/>}/>
      )}
    </div>
    )
}

