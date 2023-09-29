import { uploadPhoto, createUser } from './utils';

// eslint-disable-next-line no-unused-vars
async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
