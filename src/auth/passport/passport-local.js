import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserByEmail } from '../../user/handlers/user';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use('local', new LocalStrategy({

  usernameField: 'email',

}, async (userName, password, done) => {
  const user = await findUserByEmail(userName);
  if (!user || !(await user.validatePassword(password))) {
    return done(null, false, { message: 'Unauthorized' });
  }
  return done(null, user);
}));

export default passport;
