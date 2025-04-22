from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time
import os
import chromedriver_autoinstaller

def take_fullpage_screenshot(url):
    # Install ChromeDriver automatically
    chromedriver_autoinstaller.install()
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.add_argument("--hide-scrollbars")  # Hide scrollbars for cleaner screenshots
    
    service = Service()
    driver = webdriver.Chrome(service=service, options=chrome_options)
    
    driver.get(url)
    time.sleep(2)
    
    # Ensure we're set to HD resolution
    driver.set_window_size(1920, 1080)
    
    driver.save_screenshot("fullpage_screenshot.png")
    driver.quit()

if __name__ == "__main__":
    take_fullpage_screenshot("https://mahendrasingh.com.np/")