# Team-1

# How to Run the Server!!!

Make virtual environment before first run
```bash

python -m venv myenv
```

Do the following after virtual environment is set up:
```bash
source venv/Scripts/activate
pip install -r requirements.txt
cd api/routers
uvicorn tutor_router:app --reload

```

Follow the link given in terminal in the format of:

http://127.0.0.1:8000/docs#/

Try out the get and post!

##For Frontend
```bash
npm install
npm start
```
