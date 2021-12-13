import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;

    if (!token) return res.status(401).send('Access Denied');

    if (token && isCustomAuth) {
      const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);

      // req.user = verified;
      req.userId = verifiedUser?.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
