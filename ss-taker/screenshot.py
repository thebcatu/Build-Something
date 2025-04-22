from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time
import os
import chromedriver_autoinstaller

def take_screenshot(url, filename='high_quality_screenshot.png', quality=100):
    # Install ChromeDriver automatically
    chromedriver_autoinstaller.install()
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--window-size=2560,1440")  # Higher resolution
    chrome_options.add_argument("--hide-scrollbars")
    chrome_options.add_argument("--disable-gpu")  # Can help with rendering
    chrome_options.add_argument("--force-device-scale-factor=2")  # Retina-like quality
    chrome_options.add_argument("--disable-web-security")
    
    service = Service()
    driver = webdriver.Chrome(service=service, options=chrome_options)
    
    # Set high DPR for better quality
    driver.execute_cdp_cmd('Emulation.setDeviceMetricsOverride', {
        'width': 1280,
        'height': 900,
        'deviceScaleFactor': 2.0,
        'mobile': False
    })
    
    driver.get(url)
    
    # Wait for page to be fully loaded
    try:
        WebDriverWait(driver, 10).until(
            lambda d: d.execute_script('return document.readyState') == 'complete'
        )
        # Additional wait for dynamic content
        time.sleep(3)
    except TimeoutException:
        print("Page load timeout - taking screenshot anyway")
    
    # Ensure the directory exists
    os.makedirs(os.path.dirname(filename) if os.path.dirname(filename) else '.', exist_ok=True)
    
    # Take screenshot
    driver.save_screenshot(filename)
    print(f"Screenshot saved as {filename}")
    driver.quit()

if __name__ == "__main__":
    take_screenshot('https://mahendrasingh.com.np/')