async function uploadImage(file){

const fileName =
Date.now() + "_" + file.name;

const { data,error } =
await supabaseClient.storage
.from("complaints")
.upload(fileName,file);

return data;

}
