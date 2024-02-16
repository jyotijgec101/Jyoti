import {createClient} from "@sanity/client";

export default createClient({
  projectId: "cqmaxo07", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion : "2023-12-09", // the version of the API to use, for example "2
  useCdn: true
});
