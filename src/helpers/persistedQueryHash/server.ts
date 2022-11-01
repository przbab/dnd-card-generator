import crypto from 'crypto';

async function getPersistedQueryHash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

export default getPersistedQueryHash;
