import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../redux/userSlice';

const SignInPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    // Dispatch the signIn action with the form data
    dispatch(signIn(signInForm));
  };

  const handleSignOut = () => {
    // Dispatch the signOut action
    dispatch(signOut());
  };

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.firstName}!</h1>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Email"
        value={signInForm.email}
        onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={signInForm.password}
        onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
      />
      <button onClick={onSubmit}>Sign In</button>
    </div>
  );
};

export default SignInPage;