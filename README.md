# Jobs search App created with React Native

In this App a user can find jobs related to the values in the search field. Also a user can login to save his favourite jobs.

This App is powered with [`JSearch API`](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/):
  - API to search for jobs posted across the web in real-time from many major and minor job sites - LinkedIn, Indeed, Glassdoor, ZipRecruiter, BeBee and others using the largest and most comprehensive job aggregate on the web - powered by Google Jobs.
 
## App Images

<p float="left" align="middle">
<img src="https://github.com/VenPoisen/project-ReactNative-jobs-search/assets/102927181/c288ac19-de7e-46e3-a79e-cb6ee2c52a1d" height="500"/>
<img src="https://github.com/VenPoisen/project-ReactNative-jobs-search/assets/102927181/11972f07-6c12-4b53-8df2-971d594d8c22" height="500"/>  
<img src="https://github.com/VenPoisen/project-ReactNative-jobs-search/assets/102927181/964223ce-db99-4ade-838e-4fcee906ca6e" height="500"/> 
</p> 

<p float="left" align="middle">
<img src="https://github.com/VenPoisen/project-ReactNative-jobs-search/assets/102927181/55b461d0-7579-43f9-ab0e-236d6b383d74" height="500"/>  
<img src="https://github.com/VenPoisen/project-ReactNative-jobs-search/assets/102927181/8d6e0c66-04f8-4763-b80c-c5575bbbaa19" height="500"/>  
<img src="https://github.com/VenPoisen/project-ReactNative-jobs-search/assets/102927181/7d7a1ec5-86b4-4736-b702-afca1d880e63" height="500"/>  
</p> 

## Will be included soon
- [ ] Profile dashboard
- [ ] Favorite jobs

## How to clone
If you want to clone this repository:

```
git clone https://github.com/VenPoisen/project-ReactNative-jobs-search.git
```
```
npm install
npm update
```

### Create .env file
- Copy the .env-example file and create an .env file in the root of the project
- Create a free account on [`RapidAPI`](https://rapidapi.com/hub)
- Subscribe to the [`JSearch API`](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
- Copy your "X-rapidAPI-Key" from JSearchAPI and add it to .env file variable("RAPID_API_KEY")

### Start project
Now you can start your project
```
npm start
```

### Test application remotely
- To test the application remotely you need to download the [Expo Go](https://expo.dev/client) App on your mobile phone
- Then just scan the QR code generated on ```npm start```

### IMPORTANT Notes
If you have problems connecting remotely to your mobile phone (e.g. wifi firewall block), you will need to install an `expo-cli` package globally

```
npm -g expo-cli
```
Then, use this command instead of ```npm start```
```
expo-cli start --tunnel
```
  - Remember to connect your mobile phone to the same network as your PC.

## Libraries

- React Native
- Expo-router
  - Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.
- Axios
  - use the HTTP client [`axios`](https://www.npmjs.com/package/axios) to make REST API calls
