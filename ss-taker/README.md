# High-Quality Website Screenshot Taker

A Python tool that captures high-quality, high-resolution screenshots of websites using Selenium WebDriver and Chrome.

## Features

- Takes high-resolution screenshots with retina-like quality
- Automatically installs and manages ChromeDriver
- Adjustable resolution and device scale factor
- Waits for full page load before capturing screenshots
- Supports headless operation

## Requirements

- Python 3.6 or higher
- Chrome browser installed on your system

## Installation

1. Clone this repository:
   ```
   git clone <repository-url>
   cd ss-taker
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Usage

### Basic Usage

To take a screenshot of a website:

```python
from screenshot import take_screenshot

# Capture a screenshot of a website
take_screenshot('https://example.com/')
```

The screenshot will be saved as `high_quality_screenshot.png` in the current directory.

### Custom Options

You can customize the filename:

```python
take_screenshot('https://example.com/', filename='my_screenshot.png')
```

### Command Line

You can also run the script directly from the command line:

```
python screenshot.py
```

This will screenshot the default URL specified in the script.

## Testing

The project includes test files for screenshot functionality. Run tests with pytest:

```
pytest
```

## Advanced Usage

The `test_screenshot.py` file provides an alternative implementation for taking full-page screenshots.

To use it:

```python
from test_screenshot import take_fullpage_screenshot

take_fullpage_screenshot("https://example.com/")
```

## Troubleshooting

- If you encounter issues with Chrome not starting, ensure Chrome is properly installed on your system
- For permission errors, check if the script has write permissions to the directory
- For quality issues, adjust the window size and device scale factor parameters
