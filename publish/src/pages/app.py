import requests
from bs4 import BeautifulSoup
import numpy as np

url = 'https://velog.io/'
res = requests.get(url)

html = res.text
soup = BeautifulSoup(html, 'html.parser')
# sc-jhAzac faWcFi

all_list = []

img_list = soup.select('.sc-dVhcbM')

array=[]
img = []


for i in range(len(test)):
    if test[i].select('.sc-fMiknA > .sc-jhAzac > img') == []: 
        soup2 = BeautifulSoup('<img src="blank"/>','html.parser')
        array = soup2.select('img')
        img.append(array[0])
        
    else:
        array = test[i].select('.sc-fMiknA > .sc-jhAzac > img')
        img.append(array[0])
        


array_key = ['img','title', 'subtit','datetime','comment','icon','who','like']

dic = {}

# img_list = soup.select('.sc-jhAzac > img')
title = soup.select('.sc-fMiknA > h4')
subtit = soup.select('.description-wrapper')
datetime = soup.select('.sub-info > span:nth-child(1)')
comment = soup.select('.sub-info > span:nth-child(3)')
icon = soup.select('.userinfo > img')
who = soup.select('.userinfo > span > b')
like = soup.select('.likes ')


for no,info in enumerate(zip(img , title,subtit,datetime,comment,icon,who,like)):
    all_list.append([info[0]['src'],info[1].text.strip(),
                    info[2].text.strip(),info[3].text.strip(),
                     info[4].text,info[5]['src'],info[6].text.strip(),info[7].text.strip()])

dic2 = [i for i in range(len(all_list))]    

    
for i in range(len(all_list)):
    for j in range(len(array_key)):
        dic[array_key[j]] = all_list[i][j]
        if j==7:
            print(dic)
    
        
            
            



