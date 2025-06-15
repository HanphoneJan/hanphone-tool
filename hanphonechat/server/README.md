### TL;DR
```shell
pip install -r requirements.txt
python hanphonechat.py
```

### Use a venv:
```shell
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
```

### Call
```curl
curl --location 'http://127.0.0.1:8830/chat_with_hanphone' \
--header 'Content-Type: application/json' \
--data '{
    "message": "早上好"
}'

curl --location 'http://127.0.0.1:8830/chat_with_hanphone' \
--header 'Content-Type: application/json' \
--data '{
    "message": "早上好"
}'
```



kimi ai api key:

sk-gBKkuWCyf6l8F8iSa9D9skHDYGHvcWnxF5ErfXxCQL8uhp57



chat gpt:
服务器上也要搭建梯子，难绷

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

curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
     "model": "gpt-4o-mini",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'

linux: echo "export OPENAI_API_KEY='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'" >> ~/.zshrc
source ~/.zshrc
echo $OPENAI_API_KEY
windows setx OPENAI_API_KEY "your-api-key-here"
