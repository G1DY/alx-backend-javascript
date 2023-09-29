export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((res) => res)
    .catch((error) => {
      console.error('Load balancing error:', error);
      throw error;
    });
}
