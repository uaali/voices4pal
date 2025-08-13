# 🤝 Contributing to Voices for Palestine

Thank you for your interest in contributing to Voices for Palestine! This project aims to amplify Palestinian voices and share stories of resilience, struggle, and hope. Every contribution, no matter how small, makes a difference.

## 🌟 Ways to Contribute

### 1. Code Contributions
- Bug fixes and improvements
- New features and functionality
- Performance optimizations
- UI/UX enhancements
- Accessibility improvements
- Mobile responsiveness

### 2. Content Contributions
- Writing and editing stories
- Translating content to Arabic
- Fact-checking and verification
- Photography and media
- Data visualization

### 3. Design Contributions
- UI/UX design improvements
- Graphic design and illustrations
- Palestinian cultural elements
- Accessibility design
- Mobile-first designs

### 4. Documentation
- Improving README and guides
- API documentation
- Code comments and explanations
- Translation of documentation
- User guides and tutorials

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- Git knowledge
- Basic understanding of React/Next.js
- Respect for Palestinian experiences and dignity

### Development Setup

1. **Fork the repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally

2. **Set up your development environment**
   ```bash
   git clone https://github.com/YOUR_USERNAME/voices4pal.git
   cd voices4pal
   npm install
   cp .env.local.example .env.local
   ```

3. **Create a branch for your contribution**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Use consistent formatting
- **Naming**: Use descriptive variable and function names
- **Comments**: Add comments for complex logic

### Component Guidelines

```tsx
// Good: Descriptive component name and proper typing
interface StoryCardProps {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: Author;
}

export function StoryCard({ title, excerpt, publishedAt, author }: StoryCardProps) {
  return (
    <article className="story-card">
      {/* Component content */}
    </article>
  );
}
```

### Commit Message Guidelines

Use conventional commits format:

```
type(scope): description

feat(search): add full-text search functionality
fix(navbar): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(footer): improve responsive design
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Testing

- Test your changes across different screen sizes
- Verify accessibility with screen readers
- Test with sample content
- Ensure proper error handling

## 🔍 Pull Request Process

### Before Submitting

1. **Test thoroughly**
   ```bash
   npm run build
   npm run lint
   ```

2. **Update documentation** if needed

3. **Write descriptive commit messages**

4. **Keep PRs focused** - one feature or fix per PR

### PR Template

When submitting a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (specify)

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested with screen reader
- [ ] Build passes

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Closes #issue_number
```

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** on multiple devices
4. **Merge** after approval

## 🎯 Priority Areas

We especially welcome contributions in these areas:

### High Priority
- 🔍 **Search improvements** - Better search algorithms
- 📱 **Mobile optimization** - Enhanced mobile experience
- ♿ **Accessibility** - WCAG compliance improvements
- 🌐 **Internationalization** - Arabic language support
- ⚡ **Performance** - Loading speed optimizations

### Medium Priority
- 🎨 **UI/UX** - Design improvements
- 📊 **Data visualization** - Interactive charts and graphs
- 🔗 **Social sharing** - Share functionality
- 📧 **Newsletter** - Email subscription features

### Content Needs
- 📝 **Stories** - Personal testimonies and experiences
- 🖼️ **Photography** - Respectful, powerful imagery
- 📹 **Video content** - Documentaries and interviews
- 🗺️ **Maps** - Interactive geographical content

## 🌍 Cultural Sensitivity

When contributing to this project, please:

### Do:
- Respect Palestinian dignity and experiences
- Use accurate, respectful language
- Cite sources for factual claims
- Acknowledge the humanity in every story
- Follow Palestinian journalists and sources

### Don't:
- Use dehumanizing language
- Share unverified information
- Appropriate Palestinian culture without context
- Ignore Palestinian voices in favor of external perspectives

## 🤝 Community Guidelines

### Code of Conduct

We are committed to providing a welcoming and inclusive environment:

- **Be respectful** of different viewpoints and experiences
- **Use inclusive language** in all communications
- **Focus on collaboration** rather than criticism
- **Assume good intentions** from contributors
- **Report harassment** to maintainers

### Communication

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Pull Request comments** - Code-specific discussions

## 🏷️ Issue Labels

We use labels to organize issues:

- `good first issue` - Perfect for new contributors
- `help wanted` - We need community help
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation needs
- `accessibility` - Accessibility improvements
- `i18n` - Internationalization/translation
- `design` - UI/UX improvements

## 🎓 Learning Resources

New to the technologies we use?

### Next.js & React
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Sanity CMS
- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

### Design & Accessibility
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Web Accessibility in Mind](https://webaim.org/)

## 💬 Questions?

- **Need help?** Open an issue with the `question` label
- **Want to discuss ideas?** Start a discussion in GitHub Discussions

---

Remember: Every line of code, every story shared, every bug report, and every suggestion helps amplify Palestinian voices. Your contribution matters.

**Together, we build a platform for justice and human dignity.**