const pullRequestMarkdown: string = `
# Pull Request Title: Add User Profile Component

## Description

This PR adds a new User Profile component to the application. The component displays user information, including the avatar, name, email, and bio. Additionally, it includes basic styling and responsiveness adjustments.

## Changes

- Added \`UserProfile.tsx\` component.
- Created a CSS module \`UserProfile.module.css\` for styling.
- Updated \`App.tsx\` to include the User Profile component.
- Added a mock user data object for demonstration purposes.
- Updated unit tests for the new component.

## Motivation and Context

The User Profile component is a crucial part of the application's user management feature. It enhances the user experience by displaying personal information in a clear and organized manner. This component is also designed to be reused in different parts of the application where user information is required.

## How Has This Been Tested?

- Ran unit tests using Jest.
- Manually tested the component in various screen sizes to ensure responsiveness.
- Verified that the component integrates well with the existing application structure.

## Screenshots (if appropriate):

![UserProfile Desktop](https://via.placeholder.com/800x400)
![UserProfile Mobile](https://via.placeholder.com/400x800)

## Types of changes

- [x] New feature (non-breaking change which adds functionality)
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## Checklist:

- [x] My code follows the code style of this project.
- [x] My change requires a change to the documentation.
- [x] I have updated the documentation accordingly.
- [x] I have added tests to cover my changes.
- [x] All new and existing tests passed.
- [x] I have checked my code and corrected any misspellings.

## Linked Issues

- Issue #123

## Additional Notes

Please review the CSS module to ensure it aligns with the project's design guidelines. I also recommend a thorough review of the unit tests to ensure they cover all edge cases.

Thank you!
`;

export default pullRequestMarkdown;
