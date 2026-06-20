async function createComplaint(data){

const result =
await supabaseClient
.from('complaints')
.insert([data]);

return result;

}
