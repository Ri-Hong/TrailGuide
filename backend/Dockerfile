#
FROM python:3.9

#
WORKDIR /code

#
COPY ./backend/requirements.txt /code/requirements.txt

#
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

#
COPY ./backend/app /code/app

EXPOSE 3080

#
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "3080"]
