create database disastermanagement;

create table admin (
    username varchar(20) notnull,
    password varchar(20) notnull,
    unique(username)
);

insert into admin (
    username,
    password
)
values(
    'aswanth','a1s2w3'
),
(
    'agosh','a1g2o3'
),
(
    'navas','n1a2v3'
),
(
    'vinay','v1n2a3'
);