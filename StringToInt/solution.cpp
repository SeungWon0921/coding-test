#include <string>
#include <vector>

using namespace std;

int solution(string s)
{
  int answer = 0;
  int sign = 1;
  for (int i = 0; i < s.length(); i++)
  {
    if (i == 0 && (s[i] == '+' || s[i] == '-'))
    {
      sign = s[i] == '+' ? 1 : -1;
    }
    else
    {
      if (!('0' <= s[i] && s[i] <= '9'))
      {
        // cout << "NAN";
        return NULL;
      }
      else
      {
        answer = answer * 10 + (s[i] - '0');
      }
    }
  }
  return answer * sign;
}