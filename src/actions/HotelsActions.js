export const addHotel = hotel => {
  return {
    type: 'Hotel Add',
    payload: hotel
  };
};

export const updateHotel = hotel => {
  return {
    type: 'Hotel Update',
    payload: hotel
  };
};
export const deleteHotel = hotelId => {
  return {
    type: 'Hotel Delete',
    payload: hotelId
  };
};

export const addRoom = (room, hotelId) => {
  return {
    type: 'Room Add',
    payload: { room, hotelId }
  };
};

export const editRoom = (room, hotelId, oldRoomNo) => {
  return {
    type: 'Room Edit',
    payload: { room, hotelId , oldRoomNo}
  };
};
export const deleteRoom = (hotelId,roomNo) => {
  return {
    type: 'Room Delete',
    payload: { roomNo, hotelId}
  };
};
