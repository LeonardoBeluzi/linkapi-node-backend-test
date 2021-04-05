# API References

**List Deals**
----
  Returns json data about all deals.

* **URL**

  /deal

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"date": "04/04/2021", "value": 10}, {"date": "05/04/2021", "value": 50}]`
 
* **Error Response:**

   None

**Sync Deals**
----
  Start data synchronization.

* **URL**

  /deal/sync

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": true, "message": "Synchronization started."}`

* **Failure Response:**

  * **Code:** 200 <br />
    **Content:** `{"success": false, "message": "Synchronizing data, try again later."}`  
 

