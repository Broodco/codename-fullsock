FROM python:3.6.7

ENV PYTHONUNBUFFURED 1

RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code/
RUN pip install -r requirements.txt

COPY scripts/start*.sh /

ADD . /code/

