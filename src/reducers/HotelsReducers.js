const hotelDatas = JSON.parse(localStorage.getItem('hotels') || '[]');

const HotelsReducers = (state = hotelDatas, action) => {
  const hotels = state;
  switch (action.type) {
    case 'Hotel Add':
      const hotelDatasAdd = JSON.parse(localStorage.getItem('hotels') || '[]');
      // const newHotel = action.payload;
      hotelDatasAdd.push(action.payload);
      localStorage.setItem('hotels', JSON.stringify(hotelDatasAdd));
      return [...state, action.payload];

    case 'Hotel Update':
      const hotelDatasEdit = JSON.parse(localStorage.getItem('hotels'));
      // const editedHotel = action.payload;
      hotelDatasEdit.forEach((hotel, index) => {
        if (hotel.id === parseInt(action.payload.id)) {
          hotelDatasEdit[index] = action.payload;
        }
      });
      localStorage.setItem('hotels', JSON.stringify(hotelDatasEdit));
      return hotelDatasEdit;

    case 'Hotel Delete':
      const hotelDatasDelete = JSON.parse(localStorage.getItem('hotels'));
      const index = hotelDatasDelete.findIndex(x => x.id === action.payload);
      if (index > -1) {
        hotelDatasDelete.splice(index, 1);
        localStorage.setItem('hotels', JSON.stringify(hotelDatasDelete));
        return hotelDatasDelete;
      }
      return hotelDatasDelete;
    case 'Room Add':
      hotels.forEach((hotel, index) => {
        if (hotel.id === action.payload.hotelId) {
          hotels[index].rooms.push(action.payload.room);
        }
      });
      localStorage.setItem('hotels', JSON.stringify(hotels));
      console.log(hotels);
      return hotels;
    case 'Room Edit':
      hotels.forEach((hotel, hotelIndex) => {
        if (hotel.id === action.payload.hotelId) {
          console.log('came inside hotel');
          hotels[hotelIndex].rooms.forEach((room, roomIndex) => {
            console.log(room.roomNo, action.payload.room.roomNo);
            if (room.roomNo === action.payload.oldRoomNo) {
              console.log('came inside room');
              hotels[hotelIndex].rooms[roomIndex] = action.payload.room;
            }
          });
        }
      });
      console.log(action.payload.room, action.payload.hotelId);
      localStorage.setItem('hotels', JSON.stringify(hotels));
      return hotels;
    case 'Room Delete':
      hotels.forEach((hotel, hotelIndex) => {
        hotel.rooms.forEach((room, roomIndex) => {
          if(room.roomNo === action.payload.roomNo){
            hotels[hotelIndex].rooms.splice(roomIndex, 1);
          }
        });
      });
      console.log(hotels);
      localStorage.setItem('hotels', JSON.stringify(hotels));
      return hotels;
    default:
      return state;
  }
};

export default HotelsReducers;
