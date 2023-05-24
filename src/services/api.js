import axios from 'axios';


const api = axios.create({
  baseURL: `http://144.22.215.111/`,
});

export const getVideos = async () => {
  return api.get(`/videos`).catch((err) => {
    console.log(err);
  });
};

export const getCategorias = async () => {
  return api.get(`/categorias`).catch((err) => {
    console.log(err);
  });
};

export const getSearch = async () => {
  return api.get(`/videos`).catch((err) => {
    console.log(err);
  });
};

export const getFavorites = async () => {
  return api.get(`/favoritos`).catch((err) => {
    console.log(err);
  });
};

export const postCategorys = async (nome, subcategoria, userToken) => {
  try {
    await api.post(
      `/categorias`,
      { nome, subcategoria },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const putCategorys = async (id, nome, subcategoria, userToken) => {
  try {
    await api.put(`/categorias/${id}`,
    { nome, subcategoria },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      }
    );
  } catch (error) {
    console.log(error)
  }
};

export const deleteCategorys = async (id, userToken) => {
  try {
    await api.delete(`/categorias/${id}`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      }
    );
  } catch (error) {
    console.log(error)
  }
};

export const postVideos = async (categoria_id, data, userToken) => {
  try {
    await api.post(
      `/categorias/${categoria_id}/videos`,
      data,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const putVideos = async (categoria_id, id, data, userToken) => {
  try {
    await api.put(
      `/categorias/${categoria_id}/videos/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const deleteVideos = async (categoria_id, video_id, userToken) => {
  try {
    await api.delete(`/categorias/${categoria_id}/videos`,
      {
        data: {
          id: video_id
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      }
    );
  } catch (error) {
    console.log(error)
  }
};
export const putPassword = async ( senha, userToken) => {
  try {
    await api.put(`/usuarios`,
     senha ,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      }
    );
  } catch (error) {
    console.log(error)
  }
};

export default api;
