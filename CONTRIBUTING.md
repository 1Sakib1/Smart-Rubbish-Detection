# Contributing to Smart Rubbish Detection System

Thank you for your interest in contributing to the Smart Rubbish Detection System! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with:

- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Enhancements

We love new ideas! To suggest an enhancement:

1. Check if the suggestion already exists in Issues
2. Create a new issue with the "enhancement" label
3. Describe the feature and why it would be useful
4. Include mockups or examples if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/AmazingFeature
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run dev
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git commit -m "Add some AmazingFeature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Provide a clear description of the changes
   - Link any related issues
   - Include screenshots for UI changes

## Development Setup

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Code Style Guidelines

- Use TypeScript for type safety
- Follow React best practices and hooks guidelines
- Use Tailwind CSS for styling (avoid inline styles when possible)
- Keep components small and focused
- Write meaningful variable and function names
- Add comments for complex logic

## File Structure

```
src/
├── app/
│   ├── components/     # Reusable components
│   ├── context/        # React Context providers
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   └── routes.tsx      # Route definitions
├── styles/             # Global styles
└── main.tsx           # Application entry point
```

## Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript interfaces/types
- Keep components under 300 lines (split if larger)
- Use meaningful prop names
- Provide default props where appropriate

## Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when relevant

Examples:
- `Add user authentication feature`
- `Fix map rendering issue on mobile`
- `Update README with deployment instructions`
- `Refactor report form validation`

## Testing

Before submitting a PR:

- [ ] Test on latest Chrome, Firefox, and Safari
- [ ] Test on mobile devices (or browser dev tools)
- [ ] Verify all forms work correctly
- [ ] Check that data persists in LocalStorage
- [ ] Ensure no console errors
- [ ] Test both user and admin workflows

## Need Help?

- Check existing documentation (README.md, DEPLOYMENT.md)
- Look through closed issues for similar problems
- Contact the team (see README.md for contacts)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Give constructive feedback
- Focus on what is best for the community

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to a cleaner Sydney! 🌱
