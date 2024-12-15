import FileUploader from "../components/FileUploader";

export default function FormElements(){
    return (
    <div className="min-h-screen">
        <h1 className="text-4xl font-bold text-slate-500 mt-8">Form elements</h1>
        <div>
            <h4 className="text-2xl font-semibold text-slate-400 my-5">File Uploads in react</h4>
            <p className="text-sm text-blue-400 mb-2">using Axios package for uploading</p>
            <FileUploader/>
        </div>
    </div>
    )
}