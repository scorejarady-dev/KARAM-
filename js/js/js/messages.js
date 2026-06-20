async function sendMessage(data){

return await supabaseClient
.from('messages')
.insert([data]);

}
