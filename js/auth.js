async function registerUser(userData){

const { data, error } =
await supabaseClient
.from('users')
.insert([userData]);

return { data, error };

}
