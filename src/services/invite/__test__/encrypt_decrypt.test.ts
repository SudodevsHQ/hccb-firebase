import { generateLinkText, decryptLinkText } from '../logic';

test('Generate Link from Email', () => {
  const email = 'test@test.com';
  const encryptedLink = generateLinkText(email);
  const decryptedLink = decryptLinkText(encryptedLink, email);

  expect(decryptedLink).toEqual(email);
});
