FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Thanh Duong <thanh.duong2503@gmx.de>

ADD target/quizgame.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /app.jar" ]