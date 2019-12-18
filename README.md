## SignUp Form App
Sign up form where users can register for an imaginary service. <br />

The form requires first name, email, and password to sign in. Once user is signed in, they are taken to a confirmation page with their first name and email along with further instructions.

### Getting Started

Once the repository is cloned and packages are installed, run `npm start` and it will open the app locally on `localhost:3000`.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Testing
Run `npm test` to run automated testing.

Testing was done using React Testing Library. <br />
`The more your tests resemble the way your software is used, the more confidence they can give you.` - Kent Dodds, author of React Testing Library.

Tests should not focus on the implementation details, because this can result in two possibilities: false positives or false negatives. Any refactor can fail tests, costing development hours, and any attribute or property related tests can pass even though the entire component might not work. <br />

To prevent this, tests should resemble how the software is being used. For example, the tests written for the `SignUpForm` shows exactly that. It checks whether or not error messages are displayed given improper user input, not testing how these error messages were implemented.
