import passportJWT from 'passport-jwt';
import passport from 'passport';
import { findUserById } from '../../user/handlers/user';
import { secret } from '../../user/token/jwt';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,

}, async (jwtPayload, done) => {
  const user = await findUserById(jwtPayload.id);
  if (!user) {
    return done(null, { message: 'false' });
  }
  return done(null, user);
}));
