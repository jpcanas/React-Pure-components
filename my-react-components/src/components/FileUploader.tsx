import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react"

    // one state variable and not using multiple useState
type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export default function FileUploader(){
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<UploadStatus>('idle');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [imgPreview, setImgPreview] = useState<string | undefined>(undefined);

    function handleFileChanged(e: ChangeEvent<HTMLInputElement>){
        if (e.target.files){
            setFile(e.target.files[0]);
                  
        };
    };

    // useEffect(() => {
    //     setImgPreview(file ? URL.createObjectURL(file) : undefined);
    //     if (imgPreview){
    //         return () => URL.revokeObjectURL(imgPreview);       
    //     }
    // }), [file];

    // use axios package
    async function handleFileUpload(){
        if (!file) return;

        setStatus('uploading');
        setUploadProgress(0);

        const formData = new FormData();
        formData.append('file', file);

        try{
            await axios.post("https://httpbin.org/post", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const progress = progressEvent.total 
                    ? Math.round((progressEvent.loaded * 100) / progressEvent.total) 
                    : 0;
                setUploadProgress(progress);
                },
            });
            
            setStatus('success');
            setUploadProgress(100);
        }//A simple HTTP Request & Response Service.
        catch {
            setStatus('error');
            setUploadProgress(0);
        };
    }

    return (
        <div className="space-y-4">
            <input type="file" onChange={handleFileChanged}/>

            {file && (
                <div className="text-sm ml-2">
                    <p>File name: {file.name}</p>
                    <p>File size: {(file.size / 1024).toFixed(2)} Kb</p>
                    <p>File type: {file.type}</p>
                    <img src={imgPreview} width={200} height={200} alt="sample image" className="max-h-[200px] object-contain"/>
                </div>

            )}

            {status === 'uploading' && (
                <div className="space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-gray-200">
                        <div
                            className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
                            style={{width: `${uploadProgress}%`}}
                        > 
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">{uploadProgress}% uploaded</p>
                </div>
            )}

            {file && status !== 'uploading' && <button onClick={handleFileUpload}>Upload</button>}

            {status === 'success' && (
                <p className="text-sm text-green-600">
                    File uploaded successfully!
                </p>
            )}

            {status === 'error' && (
                <p className="text-sm text-red-600">
                    Upload failed. Please try again.
                </p>
            )}
        </div>
    )
}