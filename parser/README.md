# Resume parser

Add notes here if you want. Any discovery, issues, limitations and whatnot.

## Stack

- Python3

## Local Development

1. Create virtual environment (Don't overpopulate global)

  ```
  python3 -m venv .venv
  ```

2. Start virtual environment

  ```
  source ./.venv/bin/activate
  ```

3. Install jupyter notebook

  ```
  pip install -r requirements.txt
  ```

4. Install other necessary dependencies (this part should be update once we know what dependencies we're using)

 ```
 pip install [package]
 pip freeze > requirements.txt
 ```

5. Run jupyter notebook.

  ```
  jupyter notebook
  ```

6. If the browser doesn't open automatically, on the terminal, you will see a link with `http://locahost:8888...`. Click that link and it will redirect you to a page for jupyter notebook.

7. When done, close the jupyter server by pressing `Ctrl+D` or `cmd+D` on the terminal and then type in `deactivate` to get out of the virtual environment.