FROM python:3.10.10

WORKDIR /backend

ENV FLASK_APP=app.py

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "app.py"]
# CMD gunicorn --bind 0.0.0.0:8080 app:app