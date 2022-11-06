from selenium import webdriver
import time
import os




        
        
new_file = max([f for f in os.scandir("C:/Users/grao2/Pictures/Downloaded Images for projects, etc/Sketch AI Uploads")], key=lambda x: x.stat().st_mtime).name
new_file = "C:/Users/grao2/Pictures/Downloaded Images for projects, etc/Sketch AI Uploads/" + new_file



site = webdriver.Chrome()
site.get('https://sketch2code.azurewebsites.net/')


uploader = site.find_element("xpath", '//*[@id="file-upload"]')
uploader.send_keys(new_file)

time.sleep(10)

downloader = site.find_element("xpath", '//*[@id="results"]/div[2]/a[1]')
downloader.click()

time.sleep(10)








