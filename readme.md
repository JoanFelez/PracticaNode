# NodePop

## Database

To initialize the database use:

```shell
npm run initializeDB
```
****
<br>

## Run

To start the application in production use:

```shell
npm start
```
****
<br>

## Development

To run the application in development use:

```shell
npm run dev
```
****
<br>

## Scripts
### startingDB
This scripts removes the all the entries y the DB and initialize it with some adds, using the function below.

```shell
function initializeDB()
```

### filters
This scripts contains a function used to filters de adds based on the selected tags.

```shell
function filterQuery()
```


### constants
This file contains the adds used to initialize the DB.
****
<br>

## GET /

Returns all the ads stored in the DataBase

**Output:**
```
<html>
    <head>
        <title>Nodepop</title>
        <link rel='stylesheet' href='../stylesheets/style.css' />
    </head>
    <body>
        <h1>Nodepop</h1>
        <h2>Yamaha R1</h2>
        <p>Intention: Buy </p>
        <p>Price: 3500 </p>
        <p>Tags: Motor,Lifestyle </p>
        <img src="../images/yamaha_r1.jpg" alt="yamaha_r1.jpg"/>
        <h2>Iphone X</h2>
        <p>Intention: Sell </p>
        <p>Price: 850 </p>
        <p>Tags: Mobile </p>
        <img src="../images/iphoneX.jpg" alt="iphoneX.jpg"/>
        <h2>Xbox One</h2>
        <p>Intention: Buy </p>
        <p>Price: 300 </p>
        <p>Tags: Lifestyle </p>
        <img src="../images/xboxOne.jpg" alt="xboxOne.jpg"/>
        <h2>Miter Saw</h2>
        <p>Intention: Sell </p>
        <p>Price: 1700 </p>
        <p>Tags: Work,Lifestyle </p>
        <img src="../images/miterSaw.jpg" alt="miterSaw.jpg"/>
        <h2>Keyboard Razer Blackwidow Chroma</h2>
        <p>Intention: Buy </p>
        <p>Price: 100 </p>
        <p>Tags: Lifestyle </p>
        <img src="../images/blackwidowChroma.jpg" alt="blackwidowChroma.jpg"/>
    </body>
</html>
```
****
<br>

## GET /filter?

Returns the ads filtered by the parameters included in the url.

**Available parameters:** name, tags, intention, minprice or maxprice

**Input:**

    /filter?name=Yamaha

**Output:**

```
<html>
    <head>
        <title>Nodepop</title>
        <link rel='stylesheet' href='../stylesheets/style.css' />
    </head>
    <body>
        <h1>Nodepop</h1>
        <h2>Filtered Ads</h2>
        <h3>Yamaha R1</h3>
        <p>Intention: Buy </p>
        <p>Price: 3500 </p>
        <p>Tags: Motor,Lifestyle </p>
        <img src="../images/yamaha_r1.jpg" alt="yamaha_r1.jpg"/>
        <h3>Filtered by:</h3>
        <p> name </p>
    </body>
```

****
<br>

## GET /tags

Returns all the posible tags.

**Output**

```
<html>
    <head>
        <title>Nodepop</title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    <body>
        <h1>Nodepop</h1>
        <h2>Available Tags</h2>
        <ul>
            <li>Work</li>
            <li>Lifestyle</li>
            <li>Work</li>
            <li>Mobile</li>
        </ul>
    </body>
```
****
<br>

## GET /images/imagename.ext

Returns the image with name "imagename" and extension file ".ext"

**Input:**

```
/images/imagename.ext
```

**Output**

The image is rendered in Postman
```
<html class="gr__localhost">
    <head>
        <meta name="viewport" content="width=device-width, minimum-scale=0.1">
        <title>xboxOne.jpg (679×546)</title>
    </head>
    <body style="margin: 0px; background: #0e0e0e;" data-gr-c-s-loaded="true">
        <img style="-webkit-user-select: none;cursor: zoom-in;" src="http://localhost:3000/images/xboxOne.jpg" width="189" height="152">
    </body>
</html>
```
****
<br>

## POST /newad

Inserts a new ad in the DataBase.
The body should go in x-www-form-urlencoded(Postman)

_Checks:_

    -name: minimun length 5
    -intention: must be Sell or Buy
    -price: must be a number between "0" and "1000000"
    -tags: The allowed Tags are "Motor", "Lifestyle", "Work", "Mobile"

**Input:**

```
/newad
```

**Output:**

```
Ok
