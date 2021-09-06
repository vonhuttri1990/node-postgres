FROM postgres:11-alpine
# ENV POSTGRES_USER docker
# ENV POSTGRES_PASSWORD Abcd1234@
# ENV POSTGRES_DB api
COPY init2.sh /docker-entrypoint-initdb.d/
# WORKDIR /fixtures
# RUN /fixtures/setup.sh