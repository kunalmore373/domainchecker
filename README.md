# DomainChecker

A simple web application to check the availability of domain names using the WhoIsFreaks API.

## Description

DomainChecker is a user-friendly tool that allows users to enter a domain name and check if it is available for registration. The app provides instant feedback on domain availability, helping users find suitable domain names for their businesses or projects.

## Features

- **Domain Availability Check**: Enter a domain name and get instant results on whether it's available.
- **Responsive Design**: Clean and modern UI with gradient backgrounds and hover effects.
- **Error Handling**: Displays appropriate messages for failed checks or unavailable domains.
- **Fast and Simple**: Lightweight web app that works directly in the browser.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout, including gradients and responsive design.
- **JavaScript**: Logic for API calls and DOM manipulation.
- **WhoIsFreaks API**: External API for domain availability checks.

## Setup and Installation

1. **Clone or Download the Repository**:
   - Download the project files to your local machine.

2. **Open the Application**:
   - Open `index.html` in any modern web browser.
   - No additional server or installation required; it's a static web app.

## Usage

1. Open `index.html` in your web browser.
2. Enter a domain name (e.g., "example.com") in the input field.
3. Click the search button (magnifying glass icon).
4. View the status message below, which will indicate if the domain is available or not.

## API Key

The application uses a free API key from WhoIsFreaks. The key is currently hardcoded in `script.js` for demonstration purposes. For production use, consider securing the API key (e.g., via environment variables or a backend proxy).

- API Endpoint: `https://api.whoisfreaks.com/v1.0/domain/availability`
- Note: The API provides domain availability and suggestions.

## File Structure

- `index.html`: Main HTML file containing the UI structure.
- `style.css`: CSS file for styling the application.
- `script.js`: JavaScript file handling the API calls and user interactions.
- `search.png`: Icon for the search button.
- `download.jpeg`: Background image (commented out in CSS).
- `the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg`: Additional image asset.

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Disclaimer

This tool is for informational purposes only. Always verify domain availability through official registrars before purchasing.
