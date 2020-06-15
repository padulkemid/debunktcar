import { MongoClient } from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

const client = new MongoClient();
client.connectWithUri('mongodb://localhost:27017');

const db = client.database('debunkbet');

export const Cars = db.collection('cars');
