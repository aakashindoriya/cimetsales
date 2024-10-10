https://image.tmdb.org/t/p/original/9oYdz5gDoIl8h67e3ccv3OHtmm2.jpg (to get images)

https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=fa89a24b6ec93d795380bdb4810bb735 (to get popular)

https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=fa89a24b6ec93d795380bdb4810bb735 (to get popular)

https://api.themoviedb.org/3/genre/movie/list?api_key=fa89a24b6ec93d795380bdb4810bb735 (to get geners)


demo usl :-https://movix-app-murex.vercel.app/

https://api.themoviedb.org/3/discover/tv?language=en-US&page=1&api_key=fa89a24b6ec93d795380bdb4810bb735

with geners & sorting ()
https://api.themoviedb.org/3/discover/tv?page=3&with_genres=16&sort_by=popularity.desc

BASE URL: https://ecommerce-api-8ga2.onrender.com

ENDPOINTS:
all products: [GET]: /api/product


USER:
 - registration: [POST]: /api/user/register
  - fields: firstname, lastname, gender, email, password, role="user"

 - login: [GET]: /api/user/login

 - logout: [POST]: /api/user/logout


CART:
 - add to cart: [POST]: /api/cart/add
  - format to send:
	{
  		"productId": "66f18c7e3ebaaeac81783c2f",
		"quantity": 1,
		"attributes": {
			"color": "red",
			"size": "M"
		}
	}

 - fetch user cart: [GET]: /api/cart/get
