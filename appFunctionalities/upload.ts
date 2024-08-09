import { getStorage, ref, uploadBytes } from "firebase/storage";

interface response {
    status:boolean;
    msg:string;
}

export const uploadImage = async (folderName:string , image:any) =>{
    const storage = getStorage()
    const storageRef = ref(storage , `/${folderName}/${Date.now()}.png`)
    const imageBlob:Blob = await getBlobFroUri(image)
    const metadata = {
        contentType: 'image/jpeg'
      };
      
    
    //const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);

    try{
        const snapshot = await uploadBytes(storageRef, imageBlob , metadata)

        if(snapshot){
            console.log(snapshot);
            return {status:true , msg:snapshot}
        }

    }catch(err:any){
        console.log(err.message)
        return {status:false , msg:err.message}
    }

    // uploadBytes(storageRef, imageBlob , metadata).then((snapshot)=>{
    //   console.log('Uploaded an array!');
    //   return {status:true , msg:'uploaded'}
    // }).catch(
    //   (err)=>{
    //     console.log(err.message)
    //     return {status:false , msg:err.message}
    //   }
    // )
}

const getBlobFroUri = async (uri:any) => {
    const blob:Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    return blob;
  };