export default async function authentication(req) {
  const Authorization = req.headers.authorization;
  const UserID = req.headers.userid;

  if (!UserID || !Authorization) return null;

  const userFetchResult = {
    ok: true,
    id: 0,
    nome: 'Rafael',
  };

  // if (!userFetchResult.ok) return null;

  // const authUser = await userFetchResult.json();

  return { Authorization, UserID, ...userFetchResult };
}
