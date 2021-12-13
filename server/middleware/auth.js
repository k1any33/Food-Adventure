import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;

    if (!token) return res.status(401).send('Access Denied');

    let verifiedUser;

    if (token && isCustomAuth) {
      verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);

      req.userId = verifiedUser?._id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
