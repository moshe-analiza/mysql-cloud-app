import supabase from '../db.js';

export async function getAllRiddles() {
  const { data, error } = await supabase.from('riddles').select('*');
  if (error) throw error;
  return data;
}

export async function getRiddleById(id) {
  const { data, error } = await supabase
    .from('riddles')
    .select('*')
    .eq('id', id)
    .single(); // מחזיר רשומה אחת בלבד

  if (error) throw error;
  return data;
}

export async function addRiddle(title, question, correctAnswer) {
  const { data, error } = await supabase.from('riddles').insert([
    { title, question, correctAnswer }
  ]).select('id').single();

  if (error) throw error;
  return data.id;
}

export async function updateRiddle(id, title, question, correctAnswer) {
  const { data, error } = await supabase
    .from('riddles')
    .update({ title, question, correctAnswer })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteRiddle(id) {
  const { data, error } = await supabase
    .from('riddles')
    .delete()
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
