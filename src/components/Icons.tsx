import { LucideProps, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg
      {...props}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="64" height="64" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_0_2" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_0_2"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOUlEQVR4nO1b7WtbVRz+ubl18wXWrUyHwpjres+5Yav1rTjZhA4tvqBfRMbW0U0tqfoHKPpBREQ/OAQ/SkE2kiJR5gdhL4p0Xza1vfcka1PaJjes22AbKLg3x6q2j5ybLl3a5LZNT25ykjzwkH5IbvI85/fylNwQ1VBDDTXUUINyALQMgn0Cwa9AMAc230XVAliPr4DNeyE4Zsj+hh3gVOnA6YdXQ/Afs8VnTPiNKhkY3FOP+Au/5hafMeFZqkQg9eYDcLriSL0NnGnNb4DNv6BKA0Y7NiHZddYVLznyqocB7GeqJGB4dwBO8GJGvOTYbo8W4KepUoCRN56AE/wjS7zk6GteBhyhSgBGO9qQCl6dI14yvstrBnxIugPJva8gGbzpir3cA0xcBK6eTItPdAIikE/8JGyzkXQGEp174XRPuGL/jACYQgbj7wGxx7xO/2vSGUh2votU979IvQP8dRxZuDUOnHnSS/wQos1rSFcguW8fnO5J9+Sv/JIt/uYYMLTTa/UNI7rlIdIVcDrWwwleywy5qYkZ8TfseU6e9cNqaiCdAWf/V1lTXpb/1D/px1iz18rLpmUAJxqAyEogTAtjiKYQovMI05cIU31pDEi8lZi761/PP+3ziT+yeuHCc3MUYfK/mnB75d3JWMvCxUvKk1+a+Nvs8d+AVI6wsxjxkospe2/eQB/drZ8BvXepMgA4TOurtwJCdF3PCjhR7TPAZmq2wCFap6cBYtqEnxqA7xaZA8J0DiE6iG+oNFEaqgyQWeD4OiCyAuhd8KlPIkRnEaLP0EP362uAZQDf1y21BaIlMQEqDDi6VtUWOKinAd8uV2XAZf0MsAxVKzDNCK2s5gq45Kt4ZQYcUzQDwuT/FyuYLd7pKs0WCJEojy0w5vnFR34OFJgDwpRCiD5FhO7zXXxOAwafqeIgNPxi4eK1DUJOV7rsCz157YOQKFB0xQQhsUTx2gchUVYVUIIgJBQYoHUQstl1JW2gbRCy+ZiSKtA2CNnsByUGFIf/Td+I+bG8Ra9IBpgHykDo/LT5qaKYgLi5Nn3LaxmInJfsI+UGSEDwD/SoApagYgB9G1dB8AEN2uBWUQyQkHd5wGYXyrwFklRMQJpQ3pXweVENmGkH9n7ZDcYoH4C14R7yCxjcWo+osX86J4woSYyF5YBxefK+iq+hhrlAorHObQuLbUCsaZP8iQz6eQv6je2w+A7YfCcssw0xsw2W0Y6Y0Q6LvezS/dtol78tcp/jPpfvgDC2I8Zb3GvJa8pry/fo27iKSg3Ett0LK7AZFm+FxZ7PiPGLUfmevBVDgc2Im/7+owS7aRui7CXfRXvxd/NR/wywjK1lZYD8LCLQ7JsBmRYY3PIIouZTEOy5EghPt4BVghagHMgMwbj5YNYQtNnTWUPQ5fTQmz0E3QF5xxCUr3WvMWsIJhrrVHzo/wGSGsrozl4mzgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
};
