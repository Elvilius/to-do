import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use('local', new LocalStrategy({}, (userName, password, done) => done(null, false)));
export default passport;
