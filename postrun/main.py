from typing import Union

from fastapi import FastAPI

import time

import json

import datetime

app = FastAPI()

def append_to_json_file(file_path, new_data):
    try:

        with open(file_path, 'r') as json_file:
            existing_data = json.load(json_file)
    except (FileNotFoundError, json.JSONDecodeError):
        existing_data = []

    existing_data.append(new_data)

    with open(file_path, 'w') as json_file:
        json.dump(existing_data, json_file, indent=4)



@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[int, None] = None):
    time1 = time.time()
    final_data = {
        "queue":q,
        "data":item_id,
        "hour":str(datetime.datetime.now().hour) + ":" + str(datetime.datetime.now().minute)
    }
    append_to_json_file('data.json', final_data)
    return {"item_id": item_id, "q": q}, final_data


@app.post("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    # time1 = time.time()
    # final_data = {
    #     "time":time1,
    #     "data":item_id
    # }

    # append_to_json_file('data.json', final_data)
    return {"item_id": item_id, "q": q}, final_data